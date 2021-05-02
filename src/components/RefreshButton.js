import { useRouter } from "next/router";

import styles from "../../styles/RefreshButton.module.css";

export const RefreshButton = () => {
  const router = useRouter();

  const refresh = () => router.replace(`/${window.location.search}`);

  return (
    <button className={styles.refreshButton} onClick={refresh}>
      👉 Refresh content 👈
    </button>
  );
};
