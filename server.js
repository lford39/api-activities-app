const express = require('express')
const app = express()
const PORT = 3000
const cors = require('cors')

app.use(cors())

const activities = {
    'exercise':{
        'name': 'Do 20 minutes of exercise',
        'category': 'Wellness',
        'cost': 'Free',
        'importance': 'High',
        'difficulty': 'Hard',
        'image': 'URL'
    },
    'clean':{
        'name': 'Clean for 15 minutes',
        'category': 'Home',
        'cost': 'Free',
        'importance': 'Moderate',
        'difficulty': 'Moderate',
        'image': 'URL'

    },
    'paint':{
        'name': 'Paint some miniatures',
        'category': 'Hobbies',
        'cost': 'Low',
        'importance': 'Low',
        'difficulty': 'Moderate',
        'image': 'URL'

    },
    'journal':{
        'name': 'Journal for 15 minutes',
        'category': 'Mental Health',
        'cost': 'Free',
        'importance': 'Moderate',
        'difficulty': 'Low',
        'image': 'URL'

    },
    'cook':{
        'name': 'Cook or prep a meal',
        'category': 'Wellness',
        'cost': 'Low',
        'importance': 'High',
        'difficulty': 'Moderate',
        'image': 'URL'

    },
    'plan':{
        'name': 'Plan your day/week/month',
        'category': 'Adulting',
        'cost': 'Free',
        'importance': 'High',
        'difficulty': 'Low',
        'image': 'URL'

    },
    'hangout': {
        'name': 'Make plans with a friend',
        'category': 'Social',
        'cost': 'Medium',
        'importance': 'High',
        'difficulty': 'Moderate',
        'image': 'URL'
    },
    'family': {
        'name': 'Reach out to family member',
        'category': 'Social',
        'cost': 'Free',
        'importance': 'High',
        'difficulty': 'Moderate',
        'image': 'URL'
    },
    'pet': {
        'name': 'Play with pet',
        'category': 'Social',
        'cost': 'Free',
        'importance': 'Moderate',
        'difficulty': 'Low',
        'image': 'URL'
    },
    'groceries': {
        'name': 'Go grocery shopping',
        'category': 'Adulting',
        'cost': 'High',
        'importance': 'High',
        'difficulty': 'Moderate',
        'image': 'URL'
    },
    'meditate': {
        'name': 'Meditate for at least 5 minutes',
        'category': 'Mental Health',
        'cost': 'Free',
        'importance': 'Moderate',
        'difficulty': 'Moderate',
        'image': 'URL'
    },
    'course': {
        'name': 'Work on class assignments',
        'category': 'Self Improvement',
        'cost': 'Free',
        'importance': 'High',
        'difficulty': 'Moderate',
        'image': 'URL'
    }
}


app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:activityName', (request, response)=>{
    const activitiesName = request.params.activityName.toLowerCase()
    if(activities[activitiesName]){
        response.json(activities[activitiesName])
        console.log(response.json(activities[activitiesName]))
    }else{
        response.json('Unknown parameter')
        console.log(response.json('Unknown parameter'))
    }
})


app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})