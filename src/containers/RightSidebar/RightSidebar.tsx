import notifications from "../../data/notification.json";
import activities from "../../data/activities.json";
import contacts from "../../data/contacts.json";
import CardList from "../../components/CardList";

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <div className="notifications">
        <CardList subHeader="Notifications" list={notifications} />
      </div>
      <div className="activities">
        <CardList subHeader="Activities" list={activities} />
      </div>
      <div className="contacts">
        <CardList subHeader="Contacts" list={contacts} />
      </div>
    </div>
  );
  
};

export default RightSidebar;
