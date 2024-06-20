--Вывести ко-во видео-роликов продолжительностью до 2 ч (не вкл.), используя метод aggregate()--

db.videos.aggregate([

    // input: all documents
    {$match: {duration_secs: {$lt: 120 * 60 }
    // output: filtered documents with duration less than to hours 
    }
    },
    // input: filtered documents with duration less than to hours 
    {$count:"total_number_of_videos_with_duration_2_hours"}
    // output: the quantity of documents 
])
