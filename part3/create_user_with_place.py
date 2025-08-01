from app import create_app, db
from app.models.user import User
from app.models.place import Place
from sqlalchemy.exc import IntegrityError

app = create_app()

with app.app_context():
    try:
        # Créer un utilisateur avec des champs valides
        user = User(
            first_name="jules",
            last_name="Martin",
            email="ju@example.com",
            password="securepassword1234",  # sera hashé automatiquement
            is_admin=False
        )
        db.session.add(user)
        db.session.commit()
        print(f"✅ Utilisateur créé : {user.email}")

        # Créer un lieu lié à l'utilisateur
        place = Place(
            title="Maison avec vue sur lac",
            description="Une belle maison montagne, parfaite pour se détendre.",
            price=180.0,
            latitude=44.8378,
            longitude=-0.5792,
            user_id=user.id
        )
        db.session.add(place)
        db.session.commit()
        print(f"✅ Lieu créé : {place.title} pour {user.email}")

    except IntegrityError as e:
        db.session.rollback()
        print("❌ Erreur d'intégrité :", e.orig)
    except Exception as e:
        db.session.rollback()
        print("❌ Erreur inattendue :", str(e))
