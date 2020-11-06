// Packages
import mongoose, { Schema } from "mongoose";
require("dotenv").config();

// Vars
const port = process.env.PORT || 5000;

/*
 * CONNECT TO MONGODB
 */
const uri = process.env.ATLAS_URI || 'mongodb://localhost/shop-o-matic';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));

/**
 * .d88888b           dP                                             
 * 88.    "'          88                                             
 * `Y88888b. .d8888b. 88d888b. .d8888b. 88d8b.d8b. .d8888b. .d8888b. 
 *       `8b 88'  `"" 88'  `88 88ooood8 88'`88'`88 88'  `88 Y8ooooo. 
 * d8'   .8P 88.  ... 88    88 88.  ... 88  88  88 88.  .88       88 
 *  Y88888P  `88888P' dP    dP `88888P' dP  dP  dP `88888P8 `88888P' 
 */

 /**
 * Food
 */
const foodSchema = new Schema({
    name: {
        type: String,
        required: '{PATH} is required',
        unique: true,
        lowercase: true,
        trim: true
    },
    photo: String, // Should be overridden by favorite brand's photo
});

export const Food = mongoose.model('Food', foodSchema);

/**
 * Brand
 */
const brandSchema = new Schema({
    name: {
        type: String,
        required: '{PATH} is required',
        lowercase: true,
        trim: true,
        unique: true
    },
    website: {
        type: String,
        lowercase: true,
        trim: true
    }
})

export const Brand = mongoose.model('Brand', brandSchema);

/**
 * Store
 */
const storeSchema = new Schema({
    name: {
        type: String,
        required: '{PATH} is required',
        lowercase: true,
        trim: true,
        unique: true
    }
    // aisles???
})

export const Store = mongoose.model('Store', storeSchema);

/**
 * Product
 */
const productSchema = new Schema({
    name: {
        type: String,
        required: '{PATH} is required',
        lowercase: true,
        trim: true,
    },
    photo: String,
    food: {
        type: Schema.Types.ObjectId,
        ref: Food,
    },
    defaultProduct: Boolean,
    brand: {
        type: Schema.Types.ObjectId,
        ref: Brand,
    },
    stores: [{
        type: Schema.Types.ObjectId,
        ref: Store
    }], // Add aisle to this later
    safe: {
        type: String,
        enum: ['Unknown', 'Yes', 'No', 'Check'],
        default: 'Unknown'
    },
})

export const Product = mongoose.model('Product', productSchema);

/**
 * Shopping List
 */
const listSchema = new Schema({
    items: []
})

export const ShoppingList = mongoose.model('ShoppingList', listSchema);

/**
 *  88888888b                                       dP            
 *  88                                              88            
 * a88aaaa    dP.  .dP 88d888b. .d8888b. 88d888b. d8888P .d8888b. 
 *  88         `8bd8'  88'  `88 88'  `88 88'  `88   88   Y8ooooo. 
 *  88         .d88b.  88.  .88 88.  .88 88         88         88 
 *  88888888P dP'  `dP 88Y888P' `88888P' dP         dP   `88888P' 
 *                     88                                         
 *                     dP                                         
 */

// Promise that resolves once the MongoDB connection is open
export const isConnected = new Promise(resolve => connection.once('open', resolve))