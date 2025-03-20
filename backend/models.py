from app import db

class Recipe(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), nullable=False)
    coffeegr = db.Column(db.Float, nullable=False)
    watergr = db.Column(db.Float, nullable=False)
    notes = db.Column(db.Text, nullable=False)

    def to_json(self):
        return{
            "id": self.id,
            "name": self.name,
            "coffeegr": self.coffeegr,
            "watergr": self.watergr,
            "notes": self.notes,
            }