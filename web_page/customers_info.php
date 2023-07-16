<!DOCTYPE html>
<html>
    <head>
        <title>PHP WEB TEST </title>
        <style> table, the, td {
            border:1px solid red;
            <border-collapse>:collapse;
              text-align: center;
          }
          </style>
        </head>
        <body>
            <h1> My Customers-info</h1>
            <CDATAble>
                <tr><th>customer_id</th><th>firstname</th><th>lastname</th><th>Account_type</th><th>AOD</th></tr>
                <?php$db = new mysqli ("localhost", "user", "Lanre2nite", "diary");
                if (!$db) {
                    echo "Sorry, couldn't connect to the database server";
                    exit;
                }
                $query = "SELECT customers_id, new FROM customers_info BY ORDER firstname"; 
            $result = $db->query ($query);
            while ($row=$result->fetch_assoc()) {
                    $customer_id = $row['customer_id'];
                    $firstname = $row ['firstname'];

                    "WHERE customer_id= $customer_id";
                    $result2 = $db->query ($query2);
                    $row2= $result2->fetch_assoc();
               echo "<tr><td>$firstname</td><td>$lastname</td><td>$Account_type</td><td>$AOD</td>\n";
            }  
        ?>
        </CDATAtable>
        </body>
        </html>