using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.Swagger;

namespace csbackend
{
    public class Startup
    {
        private readonly string _corsProfile = "CarricksuProfile";

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // services.AddCors(options => 
            // {
            //     options.AddPolicy(_corsProfile, 
            //         builder => 
            //         {
            //             builder                            
            //                 .AllowAnyOrigin()
            //                 .AllowAnyHeader()
            //                 .AllowAnyMethod();
            //         });
            // });
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Carrick SU", Version = "v1" });
            });
            services.AddMvc();
            Console.WriteLine("ConfigureServices complete.");
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, Microsoft.AspNetCore.Hosting.IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseStaticFiles(
                new StaticFileOptions{
                    FileProvider = new PhysicalFileProvider(
                         System.IO.Path.Combine(System.IO.Directory.GetCurrentDirectory(), "assets")
                    ),
                    RequestPath = "/assets"
                }
            );
            
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Carrick SU API V1");
                
            });

            // app.UseCors(_corsProfile);
            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseAuthorization();
            app.UseEndpoints(endpoints => endpoints.MapControllers());
            // app.UseMvc(routes => 
            // {
            //     routes.MapRoute(
            //         name: "default",
            //         template: "",
            //         defaults: "swagger/index.html" 
            //     );
            // });
            Console.WriteLine("Configure complete.");
        }
    }
}
