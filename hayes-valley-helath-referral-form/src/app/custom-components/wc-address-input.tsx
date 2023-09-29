import React, { useState } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import WcTextField from './wc-text-field';
import { Box, List, ListItem, ListItemButton } from '@mui/material';

interface PlacesAutocompleteComponentProps { }

const styles = {
    container: {
        position: 'relative',
        zIndex: 999,
    },
    dropdownContainer: {
        maxHeight: '110px',
        overflow: 'scroll',
        position: 'absolute',
        backgroundColor: '#fff',
        width: '100%',
        boxShadow: '0px 1px 10px 1px rgba(0,0,0,0.25)',
    },
    listItem: {
        '&:hover, &:focus': {
            backgroundColor: '#CDE7ED',
        },
    },
};

const PlacesAutocompleteComponent: React.FC<PlacesAutocompleteComponentProps> = () => {
    const [address, setAddress] = useState<string>('');

    const handleChange = (newAddress: string) => {
        setAddress(newAddress);
    };

    const handleSelect = (selectedAddress: string) => {
        setAddress(selectedAddress);

        // You can perform additional actions when an address is selected,
        // such as geocoding or storing the coordinates.
        geocodeByAddress(selectedAddress)
            .then((results) => getLatLng(results[0]))
            .then((latLng) => {
                console.log('Coordinates:', latLng);
            })
            .catch((error) => {
                console.error('Geocoding Error', error);
            });
    };

    return (
        <PlacesAutocomplete value={address} onChange={handleChange} onSelect={handleSelect}>
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                    <WcTextField
                        {...getInputProps({
                            placeholder: 'Address',
                            className: 'location-search-input',
                            autoComplete: 'new-password',
                        })}
                    />
                    <Box sx={styles.container}>
                        {(loading || suggestions.length > 0) && (
                            <List className="autocomplete-dropdown-container" sx={styles.dropdownContainer}>
                                {loading && <ListItem>Loading...</ListItem>}
                                {suggestions.map((suggestion, index) => {
                                    const className = suggestion.active ? 'suggestion-item active' : 'suggestion-item';

                                    return (
                                        <ListItemButton
                                            sx={styles.listItem}
                                            {...getSuggestionItemProps(suggestion, {
                                                className,
                                                tabIndex: 0, // Add tabindex to enable focus
                                            })}
                                            key={index}
                                        >
                                            {suggestion.description}
                                        </ListItemButton>
                                    );
                                })}
                            </List>
                        )}
                    </Box>
                </div>
            )}
        </PlacesAutocomplete>
    );
};

export default PlacesAutocompleteComponent;
