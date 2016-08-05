var TodoDomain = function() {
	this.id = null;
	this.title = null;
	this.finished = 0;
	this.post_date = 0;
}

TodoDomain.prototype.setId = function(id) {
	this.id = id;
}

TodoDomain.prototype.getId = function() {
	return this.id;
}

TodoDomain.prototype.setTitle = function(title) {
	this.title = title;
}

TodoDomain.prototype.getTitle = function() {
	return this.title;
}

TodoDomain.prototype.setFinished = function(finished) {
	this.finished = finished;
}

TodoDomain.prototype.getFinished = function() {
	return this.finished;
}

TodoDomain.prototype.setPost_date = function(post_date) {
	this.post_date = post_date;
}

TodoDomain.prototype.getPost_date = function() {
	return this.post_date;
}

module.exports = {
	func: TodoDomain,
	primary: [{
		name: "id",
		type: "Long"
	}],
	fields: ["title", "finished", "post_date"],
	tableName: "bearcat_todo"
}