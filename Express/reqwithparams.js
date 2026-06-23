import express from 'express';

const app = express();
const PORT = 8000

const users =  [
  {
    "id": 1,
    "name": "Alice Johnson",
    "role": "Software Engineer",
    "department": "Engineering",
    "email": "alice.johnson@company.com",
    "skills": ["React", "Node.js", "TypeScript"]
  },
  {
    "id": 2,
    "name": "Marcus Chen",
    "role": "Data Analyst",
    "department": "Analytics",
    "email": "marcus.chen@company.com",
    "skills": ["Python", "SQL", "Tableau"]
  },
  {
    "id": 3,
    "name": "Sarah Benedict",
    "role": "HR Manager",
    "department": "Human Resources",
    "email": "sarah.b@company.com",
    "skills": ["Talent Acquisition", "Employee Relations", "Conflict Resolution"]
  },
  {
    "id": 4,
    "name": "David Kim",
    "role": "Product Designer",
    "department": "Design",
    "email": "david.kim@company.com",
    "skills": ["Figma", "UI/UX", "Wireframing"]
  },
  {
    "id": 5,
    "name": "Elena Rostova",
    "role": "DevOps Engineer",
    "department": "Infrastructure",
    "email": "elena.r@company.com",
    "skills": ["AWS", "Docker", "Kubernetes"]
  }
]
app.get('/users',(req, res)=>{
    res.send(users)
})

app.get('/users/:id',(req,res)=>{
    const id = req.params.id;
    const existingUser = users.find((user)=> user.id == id)
    if(!existingUser){
        res.send("User does not Exist")
    }
    res.send(existingUser)
})

app.listen(PORT, ()=>{
    console.log("Server is started")
})