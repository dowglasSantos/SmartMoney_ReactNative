import {useState, useEffect} from 'react';
import {
  getAllCategories,
  getDebitCategories,
  getCreditCategories,
  getInitCategory,
} from '../services/Category';

export const useCategory = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [debitCategories, setDebitCategories] = useState([]);
  const [creditCategories, setCreditCategories] = useState([]);
  const [initCategory, setInitCategory] = useState([]);

  useEffect(() => {
    const loadingAllCategories = async () => {
      const data = await getAllCategories();
      setAllCategories(data);
    };

    const loadingDebitCategories = async () => {
      const data = await getDebitCategories();
      setDebitCategories(data);
    };

    const loadingCreditCategories = async () => {
      const data = await getCreditCategories();
      setCreditCategories(data);
    };

    const loadingInitCategory = async () => {
      const data = await getInitCategory();
      setInitCategory(data);
    };

    loadingAllCategories();
    loadingDebitCategories();
    loadingCreditCategories();
    loadingInitCategory();
  }, []);

  return [allCategories, debitCategories, creditCategories, initCategory];
};
