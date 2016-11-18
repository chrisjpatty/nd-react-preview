using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml;

namespace nd_react_preview
{
    /// <summary>
    /// Summary description for ajaxHandler
    /// </summary>
    public class ajaxHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            HttpRequest request = context.Request;
            string handler = request["handler"] != null ? request["handler"] : "";
            string retVal = "";

            switch (handler)
            {
                case "ValidateItem":
                    retVal = ValidateItem(request);
                    break;
            }

            context.Response.ContentType = "text/html";
            context.Response.ContentEncoding = System.Text.Encoding.UTF8;
            context.Response.Expires = -1;
            context.Response.Cache.SetAllowResponseInBrowserHistory(true); //"works around an ie bug"
            context.Response.Write(retVal);
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }

        public string ValidateItem(HttpRequest request)
        {
            string xml = request["data"];
            XmlDocument xmlDoc = new XmlDocument();
            xmlDoc.LoadXml(xml);
            return xmlDoc.OuterXml.ToString();
        }
    }
}