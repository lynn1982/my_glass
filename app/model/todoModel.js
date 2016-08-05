var TodoModel = function() {
	this.$mid = "todoModel";
	this.$table = "bearcat_todo";
	this.id = "$primary;type:Number;default:0";
	this.title = "$type:String";
	this.finished = "$type:Number;default:0";
	this.post_date = "$type:Number;default:0";
}

module.exports = TodoModel;