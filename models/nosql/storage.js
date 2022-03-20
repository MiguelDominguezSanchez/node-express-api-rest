const mongoose = require('mongoose')

const StorageScheme = new mongoose.Schema.Schema(
	{
		url: {
			type: String,
		},
		filename: {
			type: Number,
		},
	},
	{
		timestamps: true, // TODO createdAt, updatedAt
		versionKey: false,
	}
)

module.exports = mongoose.model('storages', StorageScheme)
