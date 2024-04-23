import { useCallback, useMemo, useState } from "react";

const users = ["Martin", "Narek", "Edgar", "Gexam", "Ani"];

const getRandomWorkers = () => {
  return Array.from({ length: 10 }, (_, index) => {
    const salaries = Array.from(
      { length: 3 },
      () => (Math.floor(Math.random() * 9) + 1) * 100
    );

    return {
      id: index + 1,
      name: users[Math.floor(Math.random() * users.length)],
      salaries,
    };
  });
};

export const useMain = () => {
  const [workers, setWorkers] = useState(getRandomWorkers());
  const [count, setCount] = useState(0);

  const addCount = useCallback(
    (num = 1) => {
      setCount(count + num);
    },
    [setCount, count]
  );

  const modifiedWorkers = useMemo(() => {
    console.log("useMemo");
    return workers.map(({ id, name, salaries }) => {
      return {
        id,
        name,
        salariesJoined: salaries.join(", "),
        total: salaries.reduce((acc, salary) => {
          return acc + salary;
        }, 0), // ete oka vor array-id 0-n lini skzbanakan acc-n uremn kariq chka
      };
    });
  }, [workers]);

  return { workers: modifiedWorkers, count, addCount };
};
