import React, { useState } from 'react';

const departmentData = {
  AIDS: {
    faculty: ['Dr. Smith', 'Dr. Johnson'],
    subjects: ['AI', 'Data Science']
  },
  AIML: {
    faculty: ['Dr. Brown', 'Dr. Lee'],
    subjects: ['Machine Learning', 'Deep Learning']
  }
};

const AssignmentsTable = ({ dept, assignments, onUpdate, onDelete }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editTime, setEditTime] = useState('');

  const handleEdit = (index, time) => {
    setEditingIndex(index);
    setEditTime(time);
  };

  const handleUpdate = (index) => {
    onUpdate(dept, index, editTime);
    setEditingIndex(null);
    setEditTime('');
  };

  const handleDelete = (index) => {
    onDelete(dept, index);
  };

  return (
    <div className="assignments-table">
      <h3>Assigned Labs for {dept} Department</h3>
      <table>
        <thead>
          <tr>
            <th>Faculty Name</th>
            <th>Time</th>
            <th>Lab Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((assignment, index) => (
            <tr key={index}>
              <td>{assignment.name}</td>
              <td>
                {editingIndex === index ? (
                  <input
                    type="text"
                    value={editTime}
                    onChange={(e) => setEditTime(e.target.value)}
                    placeholder="Enter new time"
                  />
                ) : (
                  assignment.time
                )}
              </td>
              <td>{assignment.subject}</td>
              <td>
                {editingIndex === index ? (
                  <div className="actions-container">
                    <button onClick={() => handleUpdate(index)}>Submit</button>
                    <button onClick={() => setEditingIndex(null)}>Cancel</button>
                  </div>
                ) : (
                  <div className="actions-container">
                    <button onClick={() => handleEdit(index, assignment.time)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const FacultyAssignment = ({ dept, faculties, subjects, onAssign }) => {
  const [selectedFaculty, setSelectedFaculty] = useState(faculties[0]);
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);

  return (
    <div className="faculty-assignment">
      <h3>Assign Labs to Faculty</h3>
      <div>
        <label>
          Faculty:
          <select value={selectedFaculty} onChange={(e) => setSelectedFaculty(e.target.value)}>
            {faculties.map((fac) => (
              <option key={fac} value={fac}>
                {fac}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          Subject:
          <select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
            {subjects.map((sub) => (
              <option key={sub} value={sub}>
                {sub}
              </option>
            ))}
          </select>
        </label>
      </div>
      <button onClick={() => onAssign(dept, selectedFaculty, selectedSubject)}>Assign</button>
    </div>
  );
};

const App = () => {
  const [assignments, setAssignments] = useState({
    AIDS: [],
    AIML: []
  });

  const handleAssign = (dept, fac, sub) => {
    setAssignments((prev) => ({
      ...prev,
      [dept]: [...prev[dept], { name: fac, subject: sub, time: '10:00-12:00' }]
    }));
  };

  const handleUpdate = (dept, index, newTime) => {
    setAssignments((prev) => {
      const updatedAssignments = [...prev[dept]];
      updatedAssignments[index] = { ...updatedAssignments[index], time: newTime };
      return { ...prev, [dept]: updatedAssignments };
    });
  };

  const handleDelete = (dept, index) => {
    setAssignments((prev) => {
      const updatedAssignments = prev[dept].filter((_, i) => i !== index);
      return { ...prev, [dept]: updatedAssignments };
    });
  };

  return (
    <div className="App">
      <style>
        {`
          body {
            font-family: 'Arial', sans-serif;
            background-color: #f0f2f5;
            margin: 0;
            padding: 0;
          }

          .App {
            text-align: center;
            padding: 20px;
          }

          h1 {
            color: #333;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
            font-size: 3em;
          }

          .departments-container {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
          }

          .department {
            background-color: #fff;
            border-radius: 15px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            margin: 20px;
            padding: 20px;
            width: calc(50% - 40px); /* Adjusting width for spacing */
            transition: transform 0.2s;
          }

          .department:hover {
            transform: scale(1.02);
          }

          h2 {
            color: #007bff;
            border-bottom: 3px solid #007bff;
            padding-bottom: 10px;
            font-size: 2em;
          }

          .faculty-assignment {
            margin: 20px 0;
            text-align: left;
          }

          .faculty-assignment label {
            display: block;
            margin-bottom: 10px;
            font-weight: bold;
            font-size: 1.2em;
          }

          .faculty-assignment select {
            width: 100%;
            padding: 15px;
            margin-bottom: 20px;
            border: 2px solid #007bff;
            border-radius: 10px;
            font-size: 1.1em;
          }

          .faculty-assignment button {
            background-color: #007bff;
            color: #fff;
            border: none;
            padding: 15px 30px;
            border-radius: 10px;
            cursor: pointer;
            font-size: 1.2em;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
            transition: background-color 0.3s, box-shadow 0.3s;
          }

          .faculty-assignment button:hover {
            background-color: #0056b3;
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
          }

          .assignments-table {
            margin-top: 20px;
            text-align: left;
          }

          .assignments-table table {
            width: 100%;
            border-collapse: collapse;
            font-size: 1.1em;
          }

          .assignments-table th, .assignments-table td {
            border: 2px solid #ddd;
            padding: 15px;
          }

          .assignments-table th {
            background-color: #007bff;
            color: #fff;
            text-transform: uppercase;
            font-weight: bold;
          }

          .assignments-table td {
            background-color: #f9f9f9;
            transition: background-color 0.3s;
          }

          .assignments-table tr:hover td {
            background-color: #f1f1f1;
          }

          .assignments-table button {
            background-color: #dc3545;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 0.9em;
            margin-right: 5px;
            transition: background-color 0.3s;
          }

          .assignments-table button:hover {
            background-color: #c82333;
          }

          .actions-container {
            display: flex;
            gap: 10px; /* Add space between buttons */
          }

          .actions-container button {
            padding: 10px 20px; /* Increase padding for buttons */
          }
        `}
      </style>

      <h1>Lab Assignment Management</h1>

      <div className="departments-container">
        {Object.keys(departmentData).map((dept) => (
          <div key={dept} className="department">
            <h2>{dept} Department</h2>
            <FacultyAssignment
              dept={dept}
              faculties={departmentData[dept].faculty}
              subjects={departmentData[dept].subjects}
              onAssign={handleAssign}
            />
            <AssignmentsTable
              dept={dept}
              assignments={assignments[dept]}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;