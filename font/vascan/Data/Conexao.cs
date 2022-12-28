using System;
using System.Data;
using System.Data.SqlClient;

namespace vascan.Data
{
    public class Conexao
    {
        SqlConnection consql = new SqlConnection(@"Data Source=SQL8002.site4now.net;Initial Catalog=db_a90900_vascan;User Id=db_a90900_vascan_admin;Password=vascan12345");

        public SqlConnection conectarsql()
        {
            if (consql.State == ConnectionState.Closed)
            {

                consql.Open();

            }
            return consql;
        }
        public SqlConnection desconectarsql()
        {
            if (consql.State == ConnectionState.Open)
            {
                consql.Close();
            }
            return consql;
        }

    }
}
