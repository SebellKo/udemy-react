import classes from "./List.module.css";

const List = (props) => {
  return (
    <ul className={classes.list_wrapper}>
      {props.userInputList.map((userList) => {
        return (
          <li key={userList.userName} className={classes.list}>
            <div>{userList.userName} ({userList.age} years old)</div>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
