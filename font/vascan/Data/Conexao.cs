using System;
using System.Data;
using System.Data.SqlClient;

namespace vascan.Data
{
    public class Conexao
    {
        SqlConnection consql = new SqlConnection(@"Data Source=DESKTOP-FT37FDC;Initial Catalog=dbvascan;Integrated Security=True;Pooling=False");

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
