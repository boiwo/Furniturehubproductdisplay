from flask import Flask, request, jsonify
from models import db, Product
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

# -----------------------------
# Database Configuration
# -----------------------------
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'furniture.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

with app.app_context():
    db.create_all()

# -----------------------------
# Routes
# -----------------------------

# Get all products
@app.route('/api/products', methods=['GET'])
def get_products():
    products = Product.query.all()
    return jsonify([p.to_dict() for p in products])

# Get single product by ID
@app.route('/api/products/<int:id>', methods=['GET'])
def get_product(id):
    product = Product.query.get_or_404(id)
    return jsonify(product.to_dict())

# Create new product
@app.route('/api/products', methods=['POST'])
def create_product():
    data = request.json
    product = Product(
        name=data['name'],
        category=data.get('category', ''),
        description=data.get('description', ''),
        price=data['price'],
        original_price=data.get('originalPrice', 0),
        image=data.get('image', ''),
        in_stock=data.get('inStock', True),
        rating=data.get('rating', 0),
        reviews=data.get('reviews', 0)
    )
    db.session.add(product)
    db.session.commit()
    return jsonify(product.to_dict()), 201

# Update product
@app.route('/api/products/<int:id>', methods=['PUT'])
def update_product(id):
    product = Product.query.get_or_404(id)
    data = request.json
    mapping = {
        "originalPrice": "original_price",
        "inStock": "in_stock"
    }
    for key, value in data.items():
        attr = mapping.get(key, key)
        if hasattr(product, attr):
            setattr(product, attr, value)
    db.session.commit()
    return jsonify(product.to_dict())

# Delete product
@app.route('/api/products/<int:id>', methods=['DELETE'])
def delete_product(id):
    product = Product.query.get_or_404(id)
    db.session.delete(product)
    db.session.commit()
    return jsonify({"message": "Product deleted successfully"}), 200

# -----------------------------
# Run Server
# -----------------------------
if __name__ == '__main__':
    app.run(debug=True)
