from app.models.user import User

def test_user_creation():
    user = User(
        first_name="John",
        last_name="Doe",
        email="john.doe@gmail.com",
        password="SecurePass123",   # ➕ Obligatoire
        is_admin=False              # ➕ Optionnel, mais mieux de le préciser
    )
    assert user.first_name == "John"
    assert user.last_name == "Doe"
    assert user.email == "john.doe@gmail.com"
    assert user.is_admin is False
    print("✅ User creation test passed!")

test_user_creation()
