var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var nytArticleSchema = new Schema({
	title: {
		type: String,
		required: true
	},

	link: {
		type: String,
		required: true
	},

	date: {
		type: Date
	}
});

var nytArticle = mongoose.model("nytArticle", nytArticleSchema);

//Exports the model
module.exports = nytArticle;