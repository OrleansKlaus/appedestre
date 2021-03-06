(function () {
    var Message;
    Message = function (arg) {
        this.text = arg.text, this.message_side = arg.message_side;
        this.draw = function (_this) {
            return function () {
                var $message;
                $message = $($('.message_template').clone().html());
                $message.addClass(_this.message_side).find('.text').html(_this.text);
                $('.messages').append($message);
                return setTimeout(function () {
                    return $message.addClass('appeared');
                }, 0);
            };
        }(this);
        return this;
    };
    $(function () {
        var message_side, sendMessage;
        message_side = 'right';
        sendMessage = function (text, callback) {
            var $messages, message;
            if (text.trim() === '') {
                return;
            }
            $('.message_input').val('');
            $messages = $('.messages');
            message_side = message_side === 'left' ? 'right' : 'left';
            message = new Message({
                text: text,
                message_side: message_side
            });

            message.draw();

            return $messages.animate({
                scrollTop: $messages.prop('scrollHeight')
            }, 300, callback);
        };
        $('.message_input').keyup(function (e) {
            if (e.which === 13) {
                return sendMessage(getMessageText());
            }
        });

        function showButtons() {
            $('.report-buttons').addClass('active');
        }

        function hideOptions() {
            $('.messages .options').removeClass('active');
        }

        function showCarousel() {
            $('.messages .issues').addClass('active');
        }

        sendMessage('Olá, sou seu assistente virtual, o que pretende relatar?', showButtons);

        $('.report-buttons button.calcada').click(function () {

            sendMessage($(this).text(), function () {
                trocar('calcada');
                hideOptions();
                showCarousel();
                $('.flickity-slider .carousel-cell').click(function () {
                    console.log($(this).text())
                    sendMessage($(this).text(), function () {
                        hideOptions();
                    });
                });
            });
        });
        $('.report-buttons button.acidente').click(function () {
            sendMessage($(this).text(), function () {
                trocar('acidente');
                hideOptions();
                showCarousel();
                $('.flickity-slider .carousel-cell').click(function () {
                    console.log($(this).text())
                    sendMessage($(this).text(), function () {
                        hideOptions();
                    });
                });
            });
        });
        $('.report-buttons button.na_via').click(function () {
            sendMessage($(this).text(), function () {
                trocar('na_via');
                hideOptions();
                showCarousel();
                $('.flickity-slider .carousel-cell').click(function () {
                    console.log($(this).text())
                    sendMessage($(this).text(), function () {
                        hideOptions();
                    });
                });
            });
        });
        $('.issues .carousel-cell').click(function () {
            console.log($(this).text())
            sendMessage($(this).text(), function () {
                hideOptions();

            });
        });
        $('.send_message').click(function () {
            console.log($(this).text())
            $(".chat_window").hide();
            $("#map").show();
            initMap();
        });
    });
}.call(this));
