import { Link, NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [checkboxContainers, setCheckboxContainers] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });

  const [progressBars, setProgressBars] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  });

  const [totalProgress, setTotalProgress] = useState(0);

  useEffect(() => {
    const checkboxes = document.querySelectorAll('.checkbox');  //returns a node-list

    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', (e) => {              //takes 2 arguments event and callback
        const barId = e.target.getAttribute('data-bar');
        updateProgressBar(barId);
      });
    });
  }, []);

  const updateProgressBar = (barId) => {
    const container = document.getElementById(`checkbox-container${barId}`);
    const checkboxes = container.querySelectorAll('.checkbox');
    const checkedCheckboxes = container.querySelectorAll('.checkbox:checked').length;
    const percentage = (checkedCheckboxes / checkboxes.length) * 100;
    setProgressBars((prevProgressBars) => {
      const newProgressBars = {
        ...prevProgressBars,
        [barId]: Math.round(percentage),
      };
      updateTotalProgress(newProgressBars);
      return newProgressBars;
    });
  };

  const updateTotalProgress = (newProgressBars) => {
    const total = Object.values(newProgressBars).reduce((acc, curr) => acc + curr, 0) / Object.keys(newProgressBars).length;
    setTotalProgress(Math.round(total));
  };

  const toggleCheckboxContainer = (barId) => {
    setCheckboxContainers((prevContainers) => ({
      ...prevContainers,
      [barId]: !prevContainers[barId],
    }));
  };

  const topics = [
    { id: 1, name: 'Arrays', options: ['2 sum', 'Majority Element', 'Set Matrix', 'Sort 0,1,2'] },
    { id: 2, name: 'LinkedLists', options: ['Reverse List', 'Cycle Detection', 'Merge Lists', 'Remove Nth Node'] },
    { id: 3, name: 'Stack', options: ['Valid Parentheses', 'Min Stack', 'Evaluate Expression', 'Next Greater Element'] },
    { id: 4, name: 'String', options: ['Anagram', 'Palindrome', 'Substring Search', 'Longest Common Prefix'] },
    { id: 5, name: 'Recursion', options: ['Fibonacci', 'Factorial', 'Subset Sum', 'Permutations'] },
    { id: 6, name: 'BST', options: ['Insert', 'Search', 'Delete', 'Inorder Traversal'] },
  ];

  return (
    <div className="  flex mx-auto w-full max-w-7xl">
      <div className="container">
        <h1 className="text-xl font-bold font-sans mb-4 mx-2 mt-2 ">Your Work Till Now</h1>
        
        <div className="mb-4">
          <div className="w-5/6 bg-white border-2 border-red-500 rounded-xl shadow-lg relative mx-1">
            <div
              className="bg-red-600 h-8 rounded-lg flex items-center"
              style={{ width: `${totalProgress}%` }}
            >
              <span
                className="w-full text-center h-3"
                style={{
                  color: totalProgress === 0 ? 'black' : 'white',
                }}
              >
                {totalProgress}%
              </span>
            </div>
          </div>
        </div>

        {topics.map((topic) => (
          <div key={topic.id} className="mb-4">
            <h2 className="text-lg font-semibold mx-2 font-sans mb-2">{topic.name}</h2>
            <div
              className="progress-container"
              id={`progress-container${topic.id}`}
              onClick={() => toggleCheckboxContainer(topic.id)}
            >
              <div className="w-5/6 bg-white border-2 border-red-400 rounded-xl shadow-lg relative  mx-1 active:scale-95 transition duration-500 ease-linear">
                <div
                  className="bg-red-700 h-8 rounded-lg flex items-center transition-transform w-20"
                  id={`progress-bar${topic.id}`}
                  style={{ width: `${progressBars[topic.id]}%` }}
                >
                  <span
                    className="w-full text-center"
                    style={{
                      color: progressBars[topic.id] === 0 ? 'black' : 'white',
                    }}
                  >
                    {progressBars[topic.id]}%
                  </span>
                </div>
              </div>
              <div className="progress-text mt-2"></div>
            </div>

            <div
              className={`checkbox-container ${checkboxContainers[topic.id] ? 'flex' : 'hidden'} flex-col gap-2 mx-2`}
              id={`checkbox-container${topic.id}`}
            >
              {topic.options.map((option, index) => (
                <label key={index}>
                  <input
                    type="checkbox"
                    className="checkbox"
                    data-bar={topic.id}
                  />{' '}
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
