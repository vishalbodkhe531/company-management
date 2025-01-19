import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useState } from "react";

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState({ title: "", description: "" });

  const handleAddTask = () => {
    if (!newTask.title.trim()) return;
    const task: Task = {
      id: Date.now(),
      title: newTask.title,
      description: newTask.description,
      completed: false,
    };
    setTasks((prev) => [...prev, task]);
    setNewTask({ title: "", description: "" });
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <motion.div
      className="max-w-full mx-auto"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-full mx-auto p-6 bg-gray-100 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-6">Employee Task Management</h1>

        {/* Add Task Section */}
        <Dialog>
          <DialogTrigger>
            <Button>Add New Task</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Add New Task</DialogTitle>
            <DialogDescription>
              Fill in the details of the new task.
            </DialogDescription>
            <div className="space-y-4 mt-4">
              {/* Task Title */}
              <div>
                <Label htmlFor="taskTitle">Task Title</Label>
                <Input
                  id="taskTitle"
                  name="title"
                  value={newTask.title}
                  onChange={(e) =>
                    setNewTask((prev) => ({ ...prev, title: e.target.value }))
                  }
                  placeholder="Enter task title"
                />
              </div>

              {/* Task Description */}
              <div>
                <Label htmlFor="taskDescription">Task Description</Label>
                <Textarea
                  id="taskDescription"
                  name="description"
                  value={newTask.description}
                  onChange={(e) =>
                    setNewTask((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  placeholder="Enter task description"
                />
              </div>

              {/* Add Task Button */}
              <Button onClick={handleAddTask} className="btn-orange">
                Add Task
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Task List */}
        <div className="mt-6 space-y-4">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <div
                key={task.id}
                className={`p-4 rounded-lg border ${
                  task.completed ? "bg-green-100" : "bg-white"
                }`}
              >
                <div className="flex items-start justify-between">
                  {/* Task Title & Checkbox */}
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      checked={task.completed}
                      onCheckedChange={() => toggleTaskCompletion(task.id)}
                    />
                    <div>
                      <h3
                        className={`text-lg font-semibold ${
                          task.completed ? "line-through text-gray-500" : ""
                        }`}
                      >
                        {task.title}
                      </h3>
                      <p className="text-gray-600">{task.description}</p>
                    </div>
                  </div>

                  {/* Delete Button */}
                  <Button
                    variant="destructive"
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">
              No tasks available. Add a new task to get started.
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Tasks;
