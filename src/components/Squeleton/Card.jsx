import styles from "@/styles/skeleton.module.css";

export default function SkeletonCard() {

  const arrayExampleCards = [1,2,3,4,5,6,7,8]

  return (
    <div className={styles.skeletonContainer}>
      {arrayExampleCards.map((items,index) => (
        <div className={styles.skeletonItem} key={index}>
          <div className={styles.skeletonImage}></div>
          <div className={styles.skeletonText}></div>
      </div>
      ))}
    </div>
  );
}
