void function(){
  var Regular = require_lib("index.js")
  function destroy(component, container){
    component.destroy();
    expect(container.innerHTML).to.equal('');
  }

  describe("Config", function(){
    var  container, container2;
    before(function(){
      Regular.config.macro.BEGIN = '<%'
      Regular.config.macro.END = '%>'
    });
    after(function(){
      Regular.config.macro.BEGIN = '{{'
      Regular.config.macro.END = '}}'
    });
    it("can use custom END and BEGIN without conflit", function(){
      console.log(Regular.config.macro.BEGIN);
      console.log(Regular.parse("<% xx %>"))
      var component = new Regular({
        template:"{hello}<div on-click= <% a = {a:1, c:2} %> ><% hello %></div><p>name</p>",
        data: {hello: "hello"}
      }).$inject(container);

      expect(nes.one("div",container).innerHTML).to.equal("hello");

      dispatchMockEvent( nes.one( "div",container ), 'click' );

      expect(component.data.a).to.eql({a:1, c:2});


      destroy(component, container2)
    })
  })

}()
