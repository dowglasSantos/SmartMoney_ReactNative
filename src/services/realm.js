import Realm from 'realm';

import CategorySchema from '../schemas/CategorySchema';
import EntrySchema from '../schemas/EntrySchema';

import {defaultCategories} from './Category';

export const getRealm = async () => {
  const realmConection = await Realm.open({
    schema: [CategorySchema, EntrySchema],
    schemaVersion: 2,
  });

  setCategories(realmConection);
  // deleteDataBase(realmConection);

  return realmConection;
};

export const setCategories = realm => {
  const categoriesLength = realm.objects('Category').length;
  console.log(`setCategories :: categories length: ${categoriesLength}`);

  if (categoriesLength === 0) {
    const categories = defaultCategories();

    console.log('setCategories :: initing db...');

    try {
      realm.write(() => {
        categories.forEach(category => {
          console.log(
            `setCategories :: creating category: ${JSON.stringify(category)}`,
          );

          realm.create('Category', category, true);
        });
      });
    } catch (error) {
      console.error(`setCategories :: error ${JSON.stringify(error)}`);
    }
  } else {
    console.log('setCategories :: categories already existing... Skypping.');
  }
};

// const deleteDataBase = realm => {
//   realm.write(() => {
//     realm.deleteAll();
//   });
// };
