"use client";
import { useState } from "react";
import React from "react";

const page = () => {
  const [taskname, settaskname] = useState("");
  const [description, setdescription] = useState("");
  const [mainTask, setmainTask] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(taskname, description);
    setmainTask([...mainTask, { taskname, description }]);
    settaskname("");
    setdescription("");
  };

  let rendertask = (
    <h1 className="bg-red-300 border-2 p-5 m-2 ">No Task Available Now</h1>
  );

  if (mainTask.length > 0) {
    rendertask = mainTask.map((item, t) => {
      return (
        <div
          key={t}
          className=" flex justify-between items-center bg-green-400 border-2 p-5 m-2 rounded text-2xl"
        >
          <h2>{item.taskname}</h2>
          <h2>{item.description}</h2>
        </div>
      );
    });
  }

  return (
    <>
      <h1 className="mt-10 text-4xl text-center">TODO LIST </h1>
      <form
        onSubmit={handleSubmit}
        method="post "
        className="m-20 font-bold border-2 rounded bg-gray-400 p-10 h-30 "
      >
        <input
          className="h-13 w-83 border-3 p-2 m-2  mr-40"
          type="text"
          name="taskname"
          value={taskname}
          onChange={(e) => settaskname(e.target.value)}
          placeholder="Enter title here"
          required
        />
        <input
          className="h-13 w-83 border-3 p-2 m-2"
          type="text"
          name="description"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
          placeholder="Enter description here"
          required
        />
        <button
          className="bg-cyan-500 border-2 rounded h-13 w-44 ml-40"
          type="submit"
        >
          Add
        </button>
      </form>
      <div className="m-10">{rendertask}</div>
    </>
  );
};

export default page;
