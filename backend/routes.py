from app import app, db
from flask import request, jsonify
from models import Recipe

# CRUD

# Get all Recipes
@app.route("/api/recipes", methods=["GET"])
def get_recipes():
    recipes = Recipe.query.all()
    result = [recipe.to_json() for recipe in recipes]
    return jsonify(result), 200

# Create a recipe

@app.route("/api/recipes",methods=["POST"])
def create_recipe():
    try:
        data = request.json
    
        # Validations    
        required_fields = ["name","coffeegr","watergr","notes"]
        for field in required_fields:
            if field not in data or not data.get(field):
                return jsonify({"error":f'Missing required field: {field}'}), 400
            
        name = data.get("name")
        coffeegr = data.get("coffeegr")
        watergr = data.get("watergr")
        notes = data.get("notes")
        
        new_recipe = Recipe(name=name,coffeegr=coffeegr, watergr=watergr, notes=notes)
        
        db.session.add(new_recipe)
        
        db.session.commit()
        
        return jsonify(new_recipe.to_json()), 201
    
    except Exception as e:
        db.session.rollback()
        return jsonify({"error":str(e)}), 500
    
# Delete recipes

@app.route("/api/recipes/<int:id>" , methods=["DELETE"])
def delete_recipe(id):
    try:
        recipe = Recipe.query.get(id)
        if recipe is None:
            return jsonify({"error":"Recipe not found"}), 404
        
        db.session.delete(recipe)
    
        db.session.commit()
    
        return jsonify({"message":"Recipe deleted"}), 200
    
    except Exception as e:
        db.session.rollback()
        return jsonify({"error":str(e)}), 500
    
# Update recipes

@app.route("/api/recipes/<int:id>" , methods=["PATCH"])

def update_recipe(id):
    try:
        recipe = Recipe.query.get(id)
        if recipe is None:
            return jsonify({"error":"Recipe not found"}), 404
        
        data = request.json
        recipe.name = data.get("name",recipe.name)
        recipe.coffeegr = data.get("coffeegr",recipe.coffeegr)
        recipe.watergr = data.get("watergr",recipe.watergr)
        recipe.notes = data.get("notes",recipe.notes)
          
        db.session.commit()
        return jsonify(recipe.to_json()), 200
          
    except Exception as e:
        db.session.rollback()
        return jsonify({"error":str(e)}), 500