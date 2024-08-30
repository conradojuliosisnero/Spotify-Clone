import styles from "@/styles/skeleton.module.css";
import SkeletonComponent from "./SkeletonComponent";

export default function BaseSkeletonCard() {

  const arrayExampleCards = [1,2,3,4,5,6,7,8]

  return (
    <div className={styles.skeletonContainer}>
      {arrayExampleCards.map((items,index) => (
        <SkeletonComponent key={index}/>
      ))}
    </div>
  );
}
