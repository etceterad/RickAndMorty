import { useCallback, useRef, useState } from 'react';

export const useFetchContent = () => {
    const valueRef = useRef();
    const [imgList, setImgList] = useState([]);

    const fetchData = useCallback(async (value) => {
        valueRef.current = value;
        const currentURL = !valueRef.current
            ? process.env.REACT_APP_SEARCH_URL
            : `${process.env.REACT_APP_SEARCH_URL}?name=${valueRef.current}`;

        await fetch(currentURL)
            .then((res) => res.json())
            .then((res) => {
                setImgList(res.results.splice(0, 10));
            });
    }, []);

    const fetchMoreData = useCallback(async () => {
        const currentURL = !valueRef.current
            ? process.env.REACT_APP_SEARCH_URL
            : `${process.env.REACT_APP_SEARCH_URL}?name=${valueRef.current}`;

        await fetch(currentURL)
            .then((res) => res.json())
            .then((res) => {
                setImgList(res.results);
            });
    }, []);

    return [fetchData, fetchMoreData, imgList];
};
