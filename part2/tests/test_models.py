from app.models.user import User
from app.models.place import Place
from app.models.review import Review
from app.models.amenity import Amenity

print("[User]", end=" ")
try:
    user = User(
        first_name="Alice",
        last_name="Smith",
        email="alice@example.com",
        password="secret123",
        is_admin=True,  # ou False selon les besoins
    )
    print("✅ OK")
except Exception as e:
    print("❌", e)

print("[Amenity]", end=" ")
try:
    amenity = Amenity(name="Wi-Fi")
    print("✅ OK")
except Exception as e:
    print("❌", e)

print("[Place]", end=" ")
try:
    place = Place(
        title="Cosy flat",
        description="Nice",
        price=100.0,
        latitude=48.85,
        longitude=2.35,
        owner=user,
    )
    print("✅ OK")
except Exception as e:
    print("❌", e)

print("[Review]", end=" ")
try:
    review = Review(text="Super séjour", rating=5, place=place, user=user)
    print("✅ OK")
except Exception as e:
    print("❌", e)
