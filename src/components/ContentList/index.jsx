import './index.css';

const ContentList = ({ content }) => {
    return (
        <ul className="Content-list">
            {content.length === 0
                ? null
                : content.map((item) => {
                      const key = item.id;
                      const image = item.image;
                      const name = item.name;

                      return (
                          <li key={key} className="Content-list__item">
                              <img src={image} alt="character" />
                              <h3>{name}</h3>
                          </li>
                      );
                  })}
        </ul>
    );
};

export default ContentList;
