// Packages
import mongoose, { Schema } from "mongoose";
require("dotenv").config();

// Vars
const port = process.env.PORT || 5000;

/*
 * CONNECT TO MONGODB
 */
const uri = process.env.ATLAS_URI || "mongodb://localhost/shop-o-matic";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.on("error", console.error.bind(console, "connection error:"));

/**
 *  88888888b                         dP
 *  88                                88
 * a88aaaa    .d8888b. .d8888b. .d888b88
 *  88        88'  `88 88'  `88 88'  `88
 *  88        88.  .88 88.  .88 88.  .88
 *  dP        `88888P' `88888P' `88888P8
 */
const foodSchema = new Schema({
  name: {
    type: String,
    required: "{PATH} is required",
    unique: true,
    lowercase: true,
    trim: true,
  },
  photo: String, // Should be overridden by favorite brand's photo
});

export const Food = mongoose.model("Food", foodSchema);

/**
 *  888888ba                                   dP
 *  88    `8b                                  88
 * a88aaaa8P' 88d888b. .d8888b. 88d888b. .d888b88
 *  88   `8b. 88'  `88 88'  `88 88'  `88 88'  `88
 *  88    .88 88       88.  .88 88    88 88.  .88
 *  88888888P dP       `88888P8 dP    dP `88888P8
 */
const brandSchema = new Schema({
  name: {
    type: String,
    required: "{PATH} is required",
    lowercase: true,
    trim: true,
    unique: true,
  },
  website: {
    type: String,
    lowercase: true,
    trim: true,
  },
});

export const Brand = mongoose.model("Brand", brandSchema);

/**
 * .d88888b    dP
 * 88.    "'   88
 * `Y88888b. d8888P .d8888b. 88d888b. .d8888b.
 *       `8b   88   88'  `88 88'  `88 88ooood8
 * d8'   .8P   88   88.  .88 88       88.  ...
 *  Y88888P    dP   `88888P' dP       `88888P'
 */
const storeSchema = new Schema({
  name: {
    type: String,
    required: "{PATH} is required",
    lowercase: true,
    trim: true,
    unique: true,
  },
  // aisles???
});

export const Store = mongoose.model("Store", storeSchema);

/**
 *  888888ba                          dP                     dP
 *  88    `8b                         88                     88
 * a88aaaa8P' 88d888b. .d8888b. .d888b88 dP    dP .d8888b. d8888P
 *  88        88'  `88 88'  `88 88'  `88 88    88 88'  `""   88
 *  88        88       88.  .88 88.  .88 88.  .88 88.  ...   88
 *  dP        dP       `88888P' `88888P8 `88888P' `88888P'   dP
 */
const productSchema = new Schema({
  name: {
    type: String,
    required: "{PATH} is required",
    lowercase: true,
    trim: true,
  },
  photo: String,
  food: {
    type: Schema.Types.ObjectId,
    ref: Food,
  },
  favoriteProduct: {
    type: Boolean,
    default: false,
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: Brand,
  },
  stores: [
    {
      type: Schema.Types.ObjectId,
      ref: Store,
    },
  ], // Add aisle to this later
  safe: {
    type: String,
    enum: ["Unknown", "Yes", "No", "Check"],
    default: "Unknown",
  },
});

export const Product = mongoose.model("Product", productSchema);

/**
 * dP        oo            dP      dP   dP
 * 88                      88      88   88
 * 88        dP .d8888b. d8888P    88 d8888P .d8888b. 88d8b.d8b.
 * 88        88 Y8ooooo.   88      88   88   88ooood8 88'`88'`88
 * 88        88       88   88      88   88   88.  ... 88  88  88
 * 88888888P dP `88888P'   dP      dP   dP   `88888P' dP  dP  dP
 */
const listItemSchema = new Schema({
  quantity: String,
  completed: {
    type: Boolean,
    default: false,
  },
  item: {
    type: Schema.Types.ObjectId,
    ref: Food,
  },
});

export const ListItem = mongoose.model("ListItem", listItemSchema);

/**
 * EXPORTS
 */

// Promise that resolves once the MongoDB connection is open
export const isConnected = new Promise((resolve) =>
  connection.once("open", resolve)
);
