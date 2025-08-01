from app import create_app, db, bcrypt
from app.models.user import User  # Adapte si besoin

app = create_app()

with app.app_context():
    email = "admin@hbnb.com"
    password = "admin123"
    first_name = "Admin"
    last_name = "User"
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    if not User.query.filter_by(email=email).first():
        admin = User(
            first_name=first_name,
            last_name=last_name,
            email=email,
            password=hashed_password,
            is_admin=True
        )
        db.session.add(admin)
        db.session.commit()
        print("✅ Admin user created successfully.")
    else:
        print("⚠️ Admin already exists.")
