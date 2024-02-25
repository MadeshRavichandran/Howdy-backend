const loginmiddleware = require("../middleware/login.middleware");
const controller = require("../controllers/user.controller");

module.exports = (app) => {
	// Getting the user details by id
	app.get("/user/:id", loginmiddleware, controller.user);

	// Follow a user
	app.put("/follow", loginmiddleware, controller.follow);

	// UnFollow a user
	app.put("/unfollow", loginmiddleware, controller.unfollow);

	// Retrieve all Bookmarks
	app.get("/bookmarks", loginmiddleware, controller.bookmarks);

	// Bookmark a post
	app.put("/bookmark-post", loginmiddleware, controller.bookmarkPost);

	// Remove a bookmark
	app.put("/remove-bookmark", loginmiddleware, controller.removeBookmark);

	app.put("/update-picture", loginmiddleware, controller.updatePicture);

	app.post("/users-research", controller.userSearch);
};