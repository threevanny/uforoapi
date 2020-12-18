const { Schema, model } = require('mongoose');

const QuestionSchema = new Schema({
  idAutor: { type: String },
  question: { type: String },
  tag: { type: String },
}, {
  timestamps: true,
  versionKey: false
});

module.exports = model('Question', QuestionSchema);