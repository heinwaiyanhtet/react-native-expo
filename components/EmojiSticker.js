import React from 'react';

export default function EmojiSticker () {
    return (
        <View style={{ top : -350 }}>
            <Image 
                 source={stickerSource}
                 resizeMode="contain"
                 style={{ width: imageSize, height: imageSize }}
            />
        </View>
    );
}

