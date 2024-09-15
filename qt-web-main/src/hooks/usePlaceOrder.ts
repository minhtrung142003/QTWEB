import { Bounce, toast } from 'react-toastify';
import { useAuthenContext } from '@contexts/authen-context';
import { useNavigate } from 'react-router-dom';
import { placeOrder } from '@apis/place_order.api';
import { IItemCard } from '@interfaces/market-filter';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const usePlaceOrder = (
    setListProduct: Dispatch<SetStateAction<IItemCard[]>>,
    price: string,
    listProduct: IItemCard[]
) => {
    const navigate = useNavigate();
    const { auth, userId } = useAuthenContext();
    const [listProductId, setListProductId] = useState<number[]>([]);
    useEffect(() => {
        const listId: number[] = listProduct.map((product) => {
            if (product.id) {
                return product.id;
            }
            return 0;
        });
        setListProductId(listId);
    }, [listProduct]);
    const toastPlaceOrder = 'place-order';
    const handleOrder = async () => {
        if (auth?.data && userId) {
            if (listProductId.length === 0) {
                toast.info('Add at least 1 feature to place order', {
                    autoClose: 3000,
                    closeOnClick: true,
                });
            } else {
                toast.info('Placing order', {
                    toastId: toastPlaceOrder,
                    autoClose: 3000,
                    closeOnClick: true,
                    transition: Bounce,
                });
                await placeOrder(
                    userId,
                    listProductId,
                    price,
                    auth.data?.accessToken
                )
                    .then(() => {
                        toast.update(toastPlaceOrder, {
                            render: 'Place order successfully',
                            type: 'success',
                            autoClose: 3000,
                        });
                    })
                    .catch(() => {
                        toast.update(toastPlaceOrder, {
                            render: 'Error when placing order, try again !',
                            type: 'error',
                            autoClose: 3000,
                        });
                    });
            }
        } else {
            navigate('/login');
            toast.error('Please login to place order', {
                autoClose: 3000,
            });
        }

        setListProduct([]);
    };
    return { handleOrder };
};
export default usePlaceOrder;
