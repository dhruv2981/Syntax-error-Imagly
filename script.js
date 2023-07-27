fetch("https://reqres.in/api/users")
        .then(function (response) {
          return response.json();
        })
        // .then(response=> response.json)
        // yeh use klr sakte hai when single argument single return line in code only
        //for txt file use json ki jagah text method

        .then(function (data) {
          document.write("<table  style='border: 3px solid black; width: 90%; margin-left: 5%; background-color: white; border-collapse: collapse;' >");

          document.write("<tr style='border: 3px solid black;' >");
          for (y in data.data[0]) {
            document.write("<td style='text-align: center;border: 3px solid black;' >" + y + "</td>");
          }
          document.write("</tr>");
          for (var x in data.data) {
            document.write("<tr style='border: 3px solid black; ' >");
            for (var y in data.data[x]) {
                document.write("<td style='text-align: center; border: 3px solid black;' >");
                if(y=="avatar"){
                    document.write("<img src=' " + data.data[x][y] + " ' alt='avatar' >")
                }
             else{ 
              document.write(data.data[x][y]);
              }
              document.write("</td>");
            }
            document.write("</tr>");
          }

          document.write("</table>");
        })
        .catch(function (error) {
          document.write("cant fetch data");
        });