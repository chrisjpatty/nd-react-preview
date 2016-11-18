using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;
using Newtonsoft.Json;
using System.Linq;
using Newtonsoft.Json.Linq;
using System.Xml;
using Newtonsoft.Json.Converters;

namespace nd_react_preview
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        [WebMethod]
        public static string SaveDraft(string json)
        {
            return json;
        }

        [WebMethod]
        public static string ValidateField(String xml)
        {
            //object j = JsonConvert.DeserializeObject<object>(json);
            //dynamic j = Newtonsoft.Json.JsonConvert.DeserializeObject<dynamic>(json);
            //object obj = JsonHelper.Deserialize(json);
            XmlDocument doc = JsonConvert.DeserializeXmlNode(xml);
            //obj["sections"]
            //object j = JsonConvert.DeserializeObject(json);
            return JsonConvert.SerializeObject(doc);
        }
    }

    public static class JsonHelper
    {
        public static object Deserialize(string json)
        {
            return ToObject(JToken.Parse(json));
        }

        private static object ToObject(JToken token)
        {
            switch (token.Type)
            {
                case JTokenType.Object:
                    return token.Children<JProperty>()
                                .ToDictionary(prop => prop.Name,
                                              prop => ToObject(prop.Value));

                case JTokenType.Array:
                    return token.Select(ToObject).ToList();

                default:
                    return ((JValue)token).Value;
            }
        }
    }
}