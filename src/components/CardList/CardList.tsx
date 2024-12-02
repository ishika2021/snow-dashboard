import CardListItem from "../CardListItem";

interface CardListProps {
  subHeader: string;
  list: ListItem[];
}

const CardList = ({ subHeader, list }: CardListProps) => {
    
  return (
    <div className="card-list-wrapper">
      <p>{subHeader}</p>
      <div className="content">
        {list.map((listItem, index) => (
          <CardListItem {...listItem} key={index} />
        ))}
      </div>
    </div>
  );
  
};

export default CardList;
