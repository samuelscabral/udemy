import classes from "./styles.module.scss";
import { Comment } from "helpers/dbUtil";

interface CommentListProps {
  items: Comment[];
}

function CommentList({ items }: CommentListProps) {
  return (
    <ul className={classes.comments}>
      {items.map((item) => {
        return (
          <li key={item.eventId}>
            <p>{item.text}</p>
            <div>
              By <address>{item.name}</address>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default CommentList;
