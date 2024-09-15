import { getFeatures } from '@apis/products.api';
import { IFeature } from '@interfaces/market-filter';
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react';

interface IProductsContextProps {
    listFeatures: IFeature[];
    isLoading: boolean;
}
const ProductsContext = createContext<IProductsContextProps | undefined>(
    undefined
);

export const ProductsContextProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [listFeatures, setListFeatures] = useState<IFeature[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        async function getProducts() {
            try {
                setIsLoading(true);
                const response = await getFeatures();
                const data = response.data;
                const listFeatures = data.data;
                setListFeatures(listFeatures);
            } catch (error) {
                console.error('Error fetching features:', error);
            } finally {
                setIsLoading(false);
            }
        }
        getProducts();
    }, []);
    return (
        <ProductsContext.Provider value={{ listFeatures, isLoading }}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProductsContext = () => {
    const context = useContext(ProductsContext);
    if (context === undefined) {
        throw new Error(
            'useProductsContext must be used within an ProjectsProvider'
        );
    }
    return context;
};
