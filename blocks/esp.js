//Blocks for the esp8266 for the EMU robotics courses

Blockly.Blocks['esp_drive_motor'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Drive Motor")
            .appendField(new Blockly.FieldDropdown([["Left", "L"], ["Right", "R"]]), "motor")
            .appendField("With Speed");
        this.appendValueInput("Motor Speed")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};


Blockly.Lua['esp_drive_motor'] = function(block) {
    var dropdown_motor = block.getFieldValue('motor');
    var value_motor_speed = Blockly.Lua.valueToCode(block, 'Motor Speed', Blockly.Lua.ORDER_ATOMIC);
    // TODO: Assemble Lua into code variable.
    if (dropdown_motor == "L") {
        var speedPin = 2;
        var dirPin = 4;
    } else {
        var speedPin = 1;
        var dirPin = 3;
    }

    var code =  "setMotor("+value_motor_speed+", "+dirPin+", "+speedPin+")\n";
    return code;
};

Blockly.Blocks['esp_start_program'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Start The Program");
        this.setNextStatement(true, null);
        this.setColour(60);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Lua['esp_start_program'] = function(block) {
    // TODO: Assemble Lua into code variable.
    var code =  'function setupMotor(pinDir, pinSpeed)\n'
        +'    gpio.mode(pinDir, gpio.OUTPUT)\n'
        +'    pwm.setup(pinSpeed, 500, 512)\n'
        +'    pwm.start(pinSpeed)\n'
        +'end\n\n'
        +'function setMotor(speed, pinDir, pinSpeed)\n'
        +'    if speed < 0 then\n'
        +'        gpio.write(pinDir, gpio.HIGH)\n'
        +'    else\n'
        +'        gpio.write(pinDir, gpio.LOW)\n'
        +'    end\n'
        +'    pwm.setduty(pinSpeed, math.abs(speed))\n'
        +'end\n\n';
    return code;
};

Blockly.Blocks['esp_motor_setup'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Setup Motor")
            .appendField(new Blockly.FieldDropdown([["Left", "L"], ["Right", "R"]]), "motor");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Lua['esp_motor_setup'] = function(block) {
    var dropdown_motor = block.getFieldValue('motor');
    // TODO: Assemble Lua into code variable.
    if (dropdown_motor == "L") {
        var speedPin = 2;
        var dirPin = 4;
    } else {
        var speedPin = 1;
        var dirPin = 3;
    }

    var code = 'setupMotor('+dirPin+', '+speedPin+')\n';
    return code;
};

Blockly.Blocks['esp_gpio_mode'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck("Number")
            .appendField("Make Pin");
        this.appendDummyInput()
            .appendField("An")
            .appendField(new Blockly.FieldDropdown([["Input", "gpio.INPUT"], ["Output", "gpio.OUTPUT"]]), "type")
            .appendField("Pin");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip('Sets a pin to be either an input or output pin');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Lua['esp_gpio_mode'] = function(block) {
    var value_name = Blockly.Lua.valueToCode(block, 'NAME', Blockly.Lua.ORDER_ATOMIC);
    var dropdown_type = block.getFieldValue('type');
    // TODO: Assemble Lua into code variable.
    var code = 'gpio.mode('+value_name+', '+dropdown_type+')\n';
    return code;
};

Blockly.Blocks['esp_gpio_write'] = {
    init: function() {
        this.appendValueInput("pin")
            .setCheck("Number")
            .appendField("Set Pin");
        this.appendDummyInput()
            .appendField("To")
            .appendField(new Blockly.FieldDropdown([["High", "gpio.HIGH"], ["Low", "gpio.LOW"]]), "highlow");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};


Blockly.Lua['esp_gpio_write'] = function(block) {
    var value_pin = Blockly.Lua.valueToCode(block, 'pin', Blockly.Lua.ORDER_ATOMIC);
    var dropdown_highlow = block.getFieldValue('highlow');
    // TODO: Assemble Lua into code variable.
    var code = 'gpio.write('+value_pin+', '+dropdown_highlow+')\n';
    return code;
};

Blockly.Blocks['esp_gpio_read'] = {
    init: function() {
        this.appendValueInput("pin")
            .setCheck("Number")
            .appendField("The Value Of Pin");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};


Blockly.Lua['esp_gpio_read'] = function(block) {
    var value_pin = Blockly.Lua.valueToCode(block, 'pin', Blockly.Lua.ORDER_ATOMIC);
    // TODO: Assemble Lua into code variable.
    var code = 'gpio.read(' + value_pin + ')';
            // TODO: Change ORDER_NONE to the correct strength.
            return [code, Blockly.Lua.ORDER_ATOMIC];
            };

            Blockly.Blocks['esp_wait'] = {
                init: function() {
                    this.appendValueInput("time")
        .setCheck("Number")
        .appendField("Wait");
    this.appendDummyInput()
        .appendField("Seconds");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
                }
            };

Blockly.Lua['esp_wait'] = function(block) {
    var value_time = Blockly.Lua.valueToCode(block, 'time', Blockly.Lua.ORDER_ATOMIC);
    // TODO: Assemble Lua into code variable.
    var code = 'tmr.delay('+value_time*1000000+')\n';
    return code;
};

Blockly.Blocks['esp_now'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("The Current Time");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Lua['esp_now'] = function(block) {
    // TODO: Assemble Lua into code variable.
    var code = 'tmr.now()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Lua.ORDER_ATOMIC];
};

Blockly.Blocks['esp_alarm'] = {
    init: function() {
        this.appendValueInput("time")
            .setCheck("Number")
            .appendField("Every");
        this.appendDummyInput()
            .appendField("Seconds Do");
        this.appendStatementInput("code")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Lua['esp_alarm'] = function(block) {
    var value_time = Blockly.Lua.valueToCode(block, 'time', Blockly.Lua.ORDER_ATOMIC);
    var statements_code = Blockly.Lua.statementToCode(block, 'code');
    // TODO: Assemble JavaScript into code variable.
    var code = 'tmr.alarm(1, '+value_time*1000+', tmr.ALARM_AUTO, function()\n'+statements_code+'end)\n';
    return code;
};

Blockly.Blocks['esp_server'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Run Server at wifi station")
            .appendField(new Blockly.FieldTextInput("Lab202"), "ssid")
            .appendField("With Password")
            .appendField(new Blockly.FieldTextInput("Robots01"), "password")
            .appendField("With Variables")
            .appendField("X =")
            .appendField(new Blockly.FieldVariable("x"), "x")
            .appendField("Y =")
            .appendField(new Blockly.FieldVariable("y"), "y")
            .appendField("Arm =")
            .appendField(new Blockly.FieldVariable("arm"), "arm")
            .appendField("B1 =")
            .appendField(new Blockly.FieldVariable("b1"), "b1");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Lua['esp_server'] = function(block) {
    var text_ssid = block.getFieldValue('ssid');
    var text_password = block.getFieldValue('password');
    var variable_x = Blockly.Lua.variableDB_.getName(block.getFieldValue('x'), Blockly.Variables.NAME_TYPE);
    var variable_y = Blockly.Lua.variableDB_.getName(block.getFieldValue('y'), Blockly.Variables.NAME_TYPE);
    var variable_arm = Blockly.Lua.variableDB_.getName(block.getFieldValue('arm'), Blockly.Variables.NAME_TYPE);
    var variable_b1 = Blockly.Lua.variableDB_.getName(block.getFieldValue('b1'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble Lua into code variable.
    var code = 'print(wifi.sta.getip())\n' +
               'wifi.setmode(wifi.STATION)\n' +
               'wifi.sta.config("'+text_ssid+'","'+text_password+'")\n' +
               'print(wifi.sta.getip())\n' +
               'srv = net.createServer(net.TCP)\n' +
               'srv:listen(80, function(conn)\n' +
               '    conn:on("receive",function(conn, paylod)\n' +
               '        for line in string.gmatch(payload,\'[^\\r\\n]+\') do\n' +
               '            print("B "..line)\n' +
               '            s=string.find(line, "GET /&")\n' +
               '            if s ~= nil then\n' +
               '                '+variable_x+', '+variable_y+', '+variable_b1+', '+variable_arm+' = string.match(line, \n' +
               '                \'&%a+=(.*%d)&%a+=(.*%d+)&%a+=(.*%d+)&%a+=(%a+)\')\n' +
               '            else\n' +
               '                file.open("testPage.html", "r")\n'+
               '                while true do\n'+
               '                    s = file.read(1460)\n'+
               '                    if s == nil then\n' +
               '                        break\n' +
               '                    end\n'+
               '                    conn:send(s)\n'+
               '                end\n' + 
               '                file.close()\n' +
               '            end\n' +
               '            break\n' +
               '        end\n' +
               '        conn:on("sent", function(conn) conn:close() end)\n' +
               '    end)\n' +
               'end)\n';
    return code;
};
