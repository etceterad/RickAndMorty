import Header from './Header';
import Button from './Button';
import ContentList from './ContentList';
import { useCallback } from 'react';
import { useFetchContent } from '../hooks/useFetchContent';
import './App.css';

const App = () => {
    const [fetchData, fetchMoreData, imgList] = useFetchContent();
    const fetchMore = useCallback(() => fetchMoreData(), [fetchMoreData]);
    const FetchMoreButton =
        imgList.length === 10 ? (
            <Button onClick={fetchMore} children={'See more...'} />
        ) : null;

    return (
        <div className="App">
            <Header onSearch={fetchData} />
            <h1 className="Main-title">Simple content list</h1>
            <ContentList content={imgList} />
            {FetchMoreButton}
        </div>
    );
};

export default App;
