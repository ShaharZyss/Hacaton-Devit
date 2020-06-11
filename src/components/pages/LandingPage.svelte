<script>
    import ToDoLst from '../TODOLISTComponents/TODO_Lst.svelte';
    import Schedule from '../scheduleComponents/Schedule.svelte';
    import TeamUpdates from '../TeamUpdatesComponents/TeamUpdate.svelte';
</script>


<div class = "container">
    <div class = "toDoList">
        <ToDoLst /> 
    </div>

    <div class = "MainBlock">
        <div class = "schedule">
            <Schedule /> 
        </div>

        <div class = "innerBlock">
            <div class = "update">
                <TeamUpdates /> 
            </div>

            <div class = "News">
                <TeamUpdates /> 
            </div>
        </div>
    </div>

</div>

<style>
    .container{
        padding: 0;
        margin: 8px;
        display: flex;
        width: 95%;
        max-width: none;
    }

    .toDoList{
        flex: 15;
        margin: 8px;
    }

    .MainBlock{
        margin: 8px;
        flex: 25;
        display: flex;
        flex-direction: column;
        
    }

    .innerBlock{
        margin: 8px;
        flex: 25;
        display: flex;
        flex-direction: row;
    }

    .schedule{
        flex: 25;
    }


    .update{
        flex:25;
        margin: 8px;
        margin-top: 0;
        
    }

    .News{
        flex: 25;
        margin: 15px;
        margin-top: 0;
    }
</style>