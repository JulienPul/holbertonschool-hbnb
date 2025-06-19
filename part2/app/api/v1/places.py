from flask_restx import Namespace, Resource, fields
from app.services import facade

api = Namespace("places", description="Place operations")

# Define the models for related entities
amenity_model = api.model(
    "PlaceAmenity",
    {
        "id": fields.String(description="Amenity ID"),
        "name": fields.String(description="Name of the amenity"),
    },
)

user_model = api.model(
    "PlaceUser",
    {
        "id": fields.String(description="User ID"),
        "first_name": fields.String(description="First name of the owner"),
        "last_name": fields.String(description="Last name of the owner"),
        "email": fields.String(description="Email of the owner"),
    },
)

# Define the place model for input validation and documentation
place_model = api.model(
    "Place",
    {
        "title": fields.String(required=True, description="Title of the place"),
        "description": fields.String(description="Description of the place"),
        "price": fields.Float(required=True, description="Price per night"),
        "latitude": fields.Float(required=True, description="Latitude of the place"),
        "longitude": fields.Float(required=True, description="Longitude of the place"),
        "owner_id": fields.String(required=True, description="ID of the owner"),
        "amenities": fields.List(
            fields.String, required=True, description="List of amenities ID's"
        ),
    },
)


@api.route("/")
class PlaceList(Resource):
    @api.expect(place_model)
    @api.response(201, "Place successfully created")
    @api.response(400, "Invalid input data")
    def post(self):
        """Register a new place"""
        payload = api.payload
        place = facade.create_place(payload)

        if not place:
            return {"error": "Invalid input data"}, 400
        return place.to_dict(), 201

    @api.response(200, "List of places retrieved successfully")
    def get(self):
        place = facade.get_all_places()
        if not place:
            return {"error": "Place not found"}, 404
        return place, 200


@api.route("/<place_id>")
class PlaceResource(Resource):
    @api.response(200, "Place details retrieved successfully")
    @api.response(404, "Place not found")
    def get(self, place_id):
        """Get place details by ID"""
        place = facade.get_place(place_id)
        if not place:
            return {"error": "Place not found"}, 404
        return place, 200

    @api.expect(place_model)
    @api.response(200, "Place updated successfully")
    @api.response(404, "Place not found")
    @api.response(400, "Invalid input data")
    def put(self, place_id):
        payload = api.payload
        updated_place = facade.update_place(place_id, payload)

        if not updated_place:
            return {"error": "Invalid input or place not found"}, 400
        return updated_place.to_dict(), 200
