// Packages
import { composeWithMongoose } from 'graphql-compose-mongoose';
import { schemaComposer } from 'graphql-compose';
// Modules
import { Food, Product, Brand, Store, ShoppingList } from '../db';

// CONVERT MONGOOSE MODELS TO GraphQL PIECES
const customizationOptions = {};

const FoodTC = composeWithMongoose(Food, customizationOptions);
const ProductTC = composeWithMongoose(Product, customizationOptions);
const BrandTC = composeWithMongoose(Brand, customizationOptions);
const StoreTC = composeWithMongoose(Store, customizationOptions);
const ShoppingListTC = composeWithMongoose(ShoppingList, customizationOptions);

/**
 *  88888888b                         dP 
 *  88                                88 
 * a88aaaa    .d8888b. .d8888b. .d888b88 
 *  88        88'  `88 88'  `88 88'  `88 
 *  88        88.  .88 88.  .88 88.  .88 
 *  dP        `88888P' `88888P' `88888P8 
 */

schemaComposer.Query.addFields({
  foodById: FoodTC.getResolver('findById'),
  foodByIds: FoodTC.getResolver('findByIds'),
  foodOne: FoodTC.getResolver('findOne'),
  foodMany: FoodTC.getResolver('findMany'),
  foodCount: FoodTC.getResolver('count'),
  foodConnection: FoodTC.getResolver('connection'),
  foodPagination: FoodTC.getResolver('pagination'),
});

schemaComposer.Mutation.addFields({
  foodCreateOne: FoodTC.getResolver('createOne'),
  foodCreateMany: FoodTC.getResolver('createMany'),
  foodUpdateById: FoodTC.getResolver('updateById'),
  foodUpdateOne: FoodTC.getResolver('updateOne'),
  foodUpdateMany: FoodTC.getResolver('updateMany'),
  foodRemoveById: FoodTC.getResolver('removeById'),
  foodRemoveOne: FoodTC.getResolver('removeOne'),
  foodRemoveMany: FoodTC.getResolver('removeMany'),
});

// Get all the products for this food
FoodTC.addRelation('products', {
    resolver: () => ProductTC.getResolver('findMany'),
  prepareArgs: {
    filter: (source) => ({
     food : source._id
      })
    },
    projection: { _id: 1 }
})

/**
 *  888888ba                          dP                     dP   
 *  88    `8b                         88                     88   
 * a88aaaa8P' 88d888b. .d8888b. .d888b88 dP    dP .d8888b. d8888P 
 *  88        88'  `88 88'  `88 88'  `88 88    88 88'  `""   88   
 *  88        88       88.  .88 88.  .88 88.  .88 88.  ...   88   
 *  dP        dP       `88888P' `88888P8 `88888P' `88888P'   dP   
 */

 schemaComposer.Query.addFields({
  productById: ProductTC.getResolver('findById'),
  productByIds: ProductTC.getResolver('findByIds'),
  productOne: ProductTC.getResolver('findOne'),
  productMany: ProductTC.getResolver('findMany'),
  productCount: ProductTC.getResolver('count'),
  productConnection: ProductTC.getResolver('connection'),
  productPagination: ProductTC.getResolver('pagination'),
});

schemaComposer.Mutation.addFields({
  productCreateOne: ProductTC.getResolver('createOne'),
  productCreateMany: ProductTC.getResolver('createMany'),
  productUpdateById: ProductTC.getResolver('updateById'),
  productUpdateOne: ProductTC.getResolver('updateOne'),
  productUpdateMany: ProductTC.getResolver('updateMany'),
  productRemoveById: ProductTC.getResolver('removeById'),
  productRemoveOne: ProductTC.getResolver('removeOne'),
  productRemoveMany: ProductTC.getResolver('removeMany'),
});

// Product should return name of food, not its ID
ProductTC.addRelation('food', {
    resolver: () => FoodTC.getResolver('findById'),
    prepareArgs: {
        _id: source => source.food
    },
    projection: { food: 1 }
})

// Product should return name of brand, not its ID
ProductTC.addRelation('brand', {
    resolver: () => BrandTC.getResolver('findById'),
    prepareArgs: {
        _id: source => source.brand
    },
    projection: { brand: 1 }
})

/**
 *  888888ba                                   dP 
 *  88    `8b                                  88 
 * a88aaaa8P' 88d888b. .d8888b. 88d888b. .d888b88 
 *  88   `8b. 88'  `88 88'  `88 88'  `88 88'  `88 
 *  88    .88 88       88.  .88 88    88 88.  .88 
 *  88888888P dP       `88888P8 dP    dP `88888P8 
 */

 schemaComposer.Query.addFields({
  brandById: BrandTC.getResolver('findById'),
  brandByIds: BrandTC.getResolver('findByIds'),
  brandOne: BrandTC.getResolver('findOne'),
  brandMany: BrandTC.getResolver('findMany'),
  brandCount: BrandTC.getResolver('count'),
  brandConnection: BrandTC.getResolver('connection'),
  brandPagination: BrandTC.getResolver('pagination'),
});

schemaComposer.Mutation.addFields({
  brandCreateOne: BrandTC.getResolver('createOne'),
  brandCreateMany: BrandTC.getResolver('createMany'),
  brandUpdateById: BrandTC.getResolver('updateById'),
  brandUpdateOne: BrandTC.getResolver('updateOne'),
  brandUpdateMany: BrandTC.getResolver('updateMany'),
  brandRemoveById: BrandTC.getResolver('removeById'),
  brandRemoveOne: BrandTC.getResolver('removeOne'),
  brandRemoveMany: BrandTC.getResolver('removeMany'),
});

/**
 * .d88888b    dP                              
 * 88.    "'   88                              
 * `Y88888b. d8888P .d8888b. 88d888b. .d8888b. 
 *       `8b   88   88'  `88 88'  `88 88ooood8 
 * d8'   .8P   88   88.  .88 88       88.  ... 
 *  Y88888P    dP   `88888P' dP       `88888P' 
 */

 schemaComposer.Query.addFields({
  storeById: StoreTC.getResolver('findById'),
  storeByIds: StoreTC.getResolver('findByIds'),
  storeOne: StoreTC.getResolver('findOne'),
  storeMany: StoreTC.getResolver('findMany'),
  storeCount: StoreTC.getResolver('count'),
  storeConnection: StoreTC.getResolver('connection'),
  storePagination: StoreTC.getResolver('pagination'),
});

schemaComposer.Mutation.addFields({
  storeCreateOne: StoreTC.getResolver('createOne'),
  storeCreateMany: StoreTC.getResolver('createMany'),
  storeUpdateById: StoreTC.getResolver('updateById'),
  storeUpdateOne: StoreTC.getResolver('updateOne'),
  storeUpdateMany: StoreTC.getResolver('updateMany'),
  storeRemoveById: StoreTC.getResolver('removeById'),
  storeRemoveOne: StoreTC.getResolver('removeOne'),
  storeRemoveMany: StoreTC.getResolver('removeMany'),
});

/**
 * dP        oo            dP   
 * 88                      88   
 * 88        dP .d8888b. d8888P 
 * 88        88 Y8ooooo.   88   
 * 88        88       88   88   
 * 88888888P dP `88888P'   dP
 */

schemaComposer.Query.addFields({
  shoppingListById: ShoppingListTC.getResolver('findById'),
  shoppingListByIds: ShoppingListTC.getResolver('findByIds'),
  shoppingListOne: ShoppingListTC.getResolver('findOne'),
  shoppingListMany: ShoppingListTC.getResolver('findMany'),
  shoppingListCount: ShoppingListTC.getResolver('count'),
  shoppingListConnection: ShoppingListTC.getResolver('connection'),
  shoppingListPagination: ShoppingListTC.getResolver('pagination'),
});

schemaComposer.Mutation.addFields({
  shoppingListCreateOne: ShoppingListTC.getResolver('createOne'),
  shoppingListCreateMany: ShoppingListTC.getResolver('createMany'),
  shoppingListUpdateById: ShoppingListTC.getResolver('updateById'),
  shoppingListUpdateOne: ShoppingListTC.getResolver('updateOne'),
  shoppingListUpdateMany: ShoppingListTC.getResolver('updateMany'),
  shoppingListRemoveById: ShoppingListTC.getResolver('removeById'),
  shoppingListRemoveOne: ShoppingListTC.getResolver('removeOne'),
  shoppingListRemoveMany: ShoppingListTC.getResolver('removeMany'),
});

const graphqlSchema = schemaComposer.buildSchema();
export default graphqlSchema;